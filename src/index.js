import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="Ui container comments">
            <ApprovalCard>
                <CommentDetail author="Mark" time="today at 4:20PM"  status="this is so insipring" avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="James" time="today at 12:30AM" status="love this post good work" avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jones" time="today at 11:30AM" status="well put together looking forward to read more blogs" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));