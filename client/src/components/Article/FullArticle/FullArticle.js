import React, { Component } from 'react';

import styles from './FullArticle.module.css';

export class FullArticle extends Component {
  render() {
    return (
      <section className={styles.fullArticle}>
        <div className={styles.imgWrapper}>
          <img src={this.props.location.state.url} width='80' height='72' />
        </div>
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>{this.props.location.state.title}</h3>
          <p className={styles.text}>{this.props.location.state.capture}</p>
          <p className={styles.text}>{this.props.location.state.text}</p>
        </div>
      </section>
    );
  }
}

export default FullArticle;
