/**
 * Created by zhaofeng on 7/14/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router'
import {
    getSongCollections
} from '../actions/collection';

const mapStateToProps = state => ({
    collection: state.collection
});

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators({
        getSongCollections
    }, dispatch),
    dispatch
});

class Collections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1
        };
        this.timer = null;
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        let panelEl = document.getElementById('panel');
        this.props.action.getSongCollections(this.state.pageIndex);
        panelEl.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        let panelEl = document.getElementById('panel');
        panelEl.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        let obj = document.getElementById('panel');

        if (obj.offsetHeight + obj.scrollTop > obj.scrollHeight - 50) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.state.pageIndex += 2;
                this.props.action.getSongCollections(this.state.pageIndex, true);
            }, 300);
        }
    }

    render() {
        let collections = this.props.collection.collections || [];

        return (
            <div>
                <div className="elsa-panel collection">
                    <h3>歌单</h3>
                    <ul className="collection-list">
                        {collections.map((collection, index) => {
                            index++;
                            return (
                                <li className={`collection-item ${index % 5 == 0 ? 'last-child' : ''}`}
                                    key={`${collection.ID}${index}`}>
                                    <Link to={`/collection/${collection.ID}`}>
                                        <img src={collection.P}/>
                                    </Link>
                                    <div className="collection-title highlight-normal no-wrap">
                                        <Link to={`/collection/${collection.ID}`}>{collection.T}</Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collections);