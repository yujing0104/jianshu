import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                {/* <img className='topic-pic' alt='null' src={require(`${item.get('imgUrl')}`)} /> */}
                                <img className='topic-pic' alt='null' src={require('../../../statics/homeImg.jpg')}/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }

            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
   list: state.getIn(['home','topicList'])
})

export default connect(mapState, null)(Topic)