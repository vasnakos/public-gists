import React from 'react';
import PropTypes from 'prop-types';
import EmbeddedGist from './EmbeddedGist';

function GistItem (props) {
      return (
        <div className={"gist-item"}>
            <div className={"author-info"}>
                <img src={props.gist.owner.avatar_url} width={30} height={30} alt="user-avatar" />
                <a href={props.gist.owner.html_url}>{props.gist.owner.login}</a> / <a href={props.gist.html_url}>{props.gist.html_url}</a>
            </div>
            <EmbeddedGist gist={`${props.gist.owner.login}/${props.gist.id}`}></EmbeddedGist>
            <hr />
        </div>
      );
  }

GistItem.propTypes = {
    gist: PropTypes.object.isRequired
};
export default GistItem;