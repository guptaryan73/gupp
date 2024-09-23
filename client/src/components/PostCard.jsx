import { useState } from 'react';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { CIcon } from '@coreui/icons-react';
import { cilThumbUp, cilThumbDown } from '@coreui/icons'; // Use cilThumbDown here

function PostCard({ profilePic, username, postTime, postImage, description, initialLikes, initialDislikes, initialComments }) {
    const [likes, setLikes] = useState(initialLikes);
    const [dislikes, setDislikes] = useState(initialDislikes);
    const [comments, setComments] = useState(initialComments);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            setComments([...comments, { name: username, text: newComment }]);
            setNewComment('');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-neutral-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 text-white">
            <div className="p-4">
                <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full mr-4" src={profilePic} alt="User profile" />
                    <div>
                        <p className="text-xs font-medium">{username}</p>
                        <p className="text-xs text-gray-400">{postTime}</p>
                    </div>
                </div>
            </div>
            <div className="md:flex-shrink-0">
                <img className="h-0 w-full object-cover md:h-full md:w-full" src={postImage} alt="Posted image" />
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-300">{description}</p>
            </div>
            <div className="px-4 py-2 flex justify-between items-center border-t border-gray-600">
                <div className="flex space-x-4">
                    <button
                        className="flex items-center text-xs text-gray-400 hover:text-teal-400"
                        onClick={() => setLikes(likes + 1)}
                    >
                        <CIcon icon={cilThumbUp} className="h-4 w-4 mr-1" />
                        <span>{likes}</span>
                    </button>
                    <button
                        className="flex items-center text-xs text-gray-400 hover:text-red-600"
                        onClick={() => setDislikes(dislikes + 1)}
                    >
                        <CIcon icon={cilThumbDown} className="h-4 w-4 mr-1" />
                        <span>{dislikes}</span>
                    </button>
                </div>
                <button
                    className="flex items-center text-xs text-gray-400 hover:text-gray-300"
                    onClick={toggleComments}
                >
                    <ChatBubbleLeftIcon className="h-4 w-4 mr-1" />
                    <span>Comments</span>
                </button>
            </div>

            {showComments && (
                <div className="px-4 py-2 bg-neutral-900 border-t border-gray-600">
                    {comments.map((comment, index) => (
                        <div className="mb-2" key={index}>
                            <p className="text-xs font-medium">{comment.name}</p>
                            <p className="text-xs text-gray-300">{comment.text}</p>
                        </div>
                    ))}
                    <div className="flex">
                        <input
                            type="text"
                            value={newComment}
                            onChange={handleCommentChange}
                            placeholder="Add a comment..."
                            className="flex-1 p-1 border bg-neutral-900 bg-zinc-900 text-gray-300 rounded h-10 text-xs"
                        />
                        <button
                            onClick={handleCommentSubmit}
                            className="ml-2 px-2 bg-teal-700 text-white rounded text-xs"
                        >
                            Post
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function PostFeed() {
    const posts = [
        {
            profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
            username: 'John Doe',
            postTime: '2 hours ago',
            postImage: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68',
            description: 'A beautiful sunset at the beach.',
            initialLikes: 24,
            initialDislikes: 3,
            initialComments: [
                { name: 'Jane Smith', text: 'Amazing view!' },
                { name: 'Alex Johnson', text: 'I want to go there!' },
                { name: 'Chris Lee', text: 'Nice shot!' }
            ]
        },
        {
            profilePic: 'https://randomuser.me/api/portraits/men/12.jpg',
            username: 'Michael Brown',
            postTime: '1 day ago',
            postImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
            description: 'Coffee and code to start the day.',
            initialLikes: 42,
            initialDislikes: 5,
            initialComments: [
                { name: 'Emily Stone', text: 'Coffee is life!' },
                { name: 'Jane Smith', text: 'Great combo!' },
                { name: 'Alex Johnson', text: 'Let’s code together!' }
            ]
        }
    ];

    return (
        <div>
            {posts.map((post, index) => (
                <PostCard
                    key={index}
                    profilePic={post.profilePic}
                    username={post.username}
                    postTime={post.postTime}
                    postImage={post.postImage}
                    description={post.description}
                    initialLikes={post.initialLikes}
                    initialDislikes={post.initialDislikes}
                    initialComments={post.initialComments}
                />
            ))}
        </div>
    );
}
