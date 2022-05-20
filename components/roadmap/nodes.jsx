const timelineData = [
    {
        text: 'Vision & Value',
        date: '01',
        category: {
            tag: 'app-ideas',
            color: '#FFDB14'
        },
        link: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
    },
    {
        text: 'Community',
        date: '02',
        category: {
            tag: 'blog',
            color: '#e17b77'
        },
        link: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
    },
    {
        text: 'Metaverse',
        date: '03',
        category: {
            tag: 'twitter',
            color: '#1DA1F2'
        },
        link: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
    },
    {
        text:
            'Physical world',
        date: '04',
        category: {
            tag: 'medium',
            color: '#018f69'
        },
        link: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
    },
    {
        text: 'Bridge Between',
        date: '05',
        category: {
            tag: 'medium',
            color: '#018f69'
        },
        link: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
    }
]







const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <div className="number">{data.date}</div>
            <h3 className="slogan">{data.text}</h3>
            {data.link && (
                <div className="normal-text">
                    {data.link.text}
                </div>
            )}

        </div>
    </div>
);


export const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

