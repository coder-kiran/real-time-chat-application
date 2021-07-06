const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByTheUser = !lastMessage || lastMessage.sender.username
    return (
        <div className="message-row">
            {
                isFirstMessageByTheUser && (
                    <div
                        className="message-avatar"
                        style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                    />
                )
            }
            {
                message?.attachments?.length > 0
                    ? (
                        <img
                            src={message.attachments[0].file}
                            alt="message-attachment"
                            className="message-image"
                            style={{ marginLeft: isFirstMessageByTheUser ? '4px' : '48px'}}
                        />
                    ) :
                    (
                        <div className="message" style={{ float: 'left',backgroundColor: '#cabcdc', marginLeft: isFirstMessageByTheUser ? '4px' : '48px' }}>
                            {message.text}
                        </div>
                    )


            }
        </div>
    )
}
export default TheirMessage;