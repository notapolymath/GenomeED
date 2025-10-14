import { useState } from 'react'
import { MessageSquare, ThumbsUp, Reply, Send } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const CommentSection = ({ topicId, topicTitle }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah M.",
      timestamp: "2 hours ago",
      content: "I think we should be very careful with embryo editing. While preventing genetic diseases sounds great, where do we draw the line? What if parents start choosing eye color or intelligence?",
      likes: 12,
      replies: [
        {
          id: 101,
          author: "James K.",
          timestamp: "1 hour ago",
          content: "That's a valid concern, but I think we can create strict regulations. We already have rules about what medical procedures are allowed.",
          likes: 5
        }
      ]
    },
    {
      id: 2,
      author: "Alex P.",
      timestamp: "3 hours ago",
      content: "From a scientific perspective, CRISPR is still experimental. We don't fully understand all the long-term effects. Shouldn't we wait until we have more data?",
      likes: 8,
      replies: []
    }
  ])

  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState('')

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "You",
        timestamp: "Just now",
        content: newComment,
        likes: 0,
        replies: []
      }
      setComments([comment, ...comments])
      setNewComment('')
    }
  }

  const handleSubmitReply = (commentId) => {
    if (replyText.trim()) {
      const updatedComments = comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                author: "You",
                timestamp: "Just now",
                content: replyText,
                likes: 0
              }
            ]
          }
        }
        return comment
      })
      setComments(updatedComments)
      setReplyText('')
      setReplyingTo(null)
    }
  }

  const handleLike = (commentId, isReply = false, parentId = null) => {
    if (isReply) {
      const updatedComments = comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => 
              reply.id === commentId 
                ? { ...reply, likes: reply.likes + 1 }
                : reply
            )
          }
        }
        return comment
      })
      setComments(updatedComments)
    } else {
      const updatedComments = comments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
      setComments(updatedComments)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-2 text-black flex items-center">
        <MessageSquare className="mr-3 text-red-500" size={32} />
        Discussion: {topicTitle}
      </h2>
      <p className="text-gray-600 mb-8">Share your thoughts and engage with others</p>

      {/* New Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-2">
            Add Your Comment
          </label>
          <textarea
            id="comment"
            rows="4"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your perspective on this bioethics question..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
          />
        </div>
        <Button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-300"
          disabled={!newComment.trim()}
        >
          <Send size={18} className="mr-2" />
          Post Comment
        </Button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-black mb-4">
          {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
        </h3>
        
        {comments.map((comment) => (
          <div key={comment.id} className="border-l-4 border-red-500 pl-6 py-4">
            {/* Comment Header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-bold text-black">{comment.author}</span>
                <span className="text-gray-500 text-sm ml-3">{comment.timestamp}</span>
              </div>
            </div>

            {/* Comment Content */}
            <p className="text-gray-700 mb-4 leading-relaxed">{comment.content}</p>

            {/* Comment Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleLike(comment.id)}
                className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300"
              >
                <ThumbsUp size={16} className="mr-1" />
                <span className="text-sm">{comment.likes}</span>
              </button>
              <button
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300"
              >
                <Reply size={16} className="mr-1" />
                <span className="text-sm">Reply</span>
              </button>
            </div>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <div className="mt-4 ml-6 animate-in fade-in slide-in-from-top duration-300">
                <textarea
                  rows="3"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write your reply..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none mb-2"
                />
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleSubmitReply(comment.id)}
                    className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-300"
                    disabled={!replyText.trim()}
                  >
                    Post Reply
                  </Button>
                  <Button
                    onClick={() => {
                      setReplyingTo(null)
                      setReplyText('')
                    }}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-4 ml-6 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold text-black text-sm">{reply.author}</span>
                        <span className="text-gray-500 text-xs ml-2">{reply.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-2 leading-relaxed">{reply.content}</p>
                    <button
                      onClick={() => handleLike(reply.id, true, comment.id)}
                      className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300"
                    >
                      <ThumbsUp size={14} className="mr-1" />
                      <span className="text-xs">{reply.likes}</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection

