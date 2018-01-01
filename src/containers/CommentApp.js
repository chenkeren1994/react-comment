/**
 * Created by seal on 1/1/18.
 */
import React from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}