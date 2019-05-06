import React, { Component } from 'react';
import { Link } from "gatsby";
import Image from '../elements/Image';

class PostLink extends Component {
    render() {
        return (
            <li>
              <Link to={this.props.post.frontmatter.path}>
                <Image imgName={this.props.post.frontmatter.thumbnail.replace( '/images/uploads/', '' )}/>
                <p>{this.props.post.frontmatter.title} ({this.props.post.frontmatter.date})</p>
              </Link>
            </li>
        )
    }
}

export default PostLink;