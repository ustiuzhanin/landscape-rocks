import React, { Component } from 'react';

import styles from './Articles.module.css';
import Article from '../../components/Article/Article';

export class Articles extends Component {
  state = {
    articles: [
      {
        id: 'rocks',
        title: 'test1',
        url: 'https://images.unsplash.com/flagged/photo-1554443883-83db889b4007?ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80',
        capture: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        text: 'Lorem ipsum dolor sit amet, vivendo deleniti ius at. Ut quod quas corrumpit sea, ex mutat accusam sed. Amet eligendi qui ad. Affert habemus legendos vim ei, cu purto graece veritus eam. Affert doctus eloquentiam te sed, ut vis nostro eirmod imperdiet, cu pri elit percipitur liberavisse. Tacimates abhorreant delicatissimi vis ei, eos ad graeci tibique delectus. At docendi democritum adolescens nam, ei feugiat comprehensam mei. Iusto sensibus qui et. Vis no nostro detraxit, vocent probatus ut pro. Sit no nonumy insolens. Ut movet fabellas nec, mea fugit everti at.'
      },
      {
        id: 'sand',
        title: 'test2',
        url: 'https://images.unsplash.com/photo-1554548686-7d93ffa2a53d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        capture: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum.',
        text: 'Lorem ipsum dolor sit amet, te facilis definiebas instructior has. Cu usu summo essent referrentur, ius nemore iuvaret eu. Cu homero causae scribentur vix, ut meis torquatos dissentiunt nam, pro te dicat civibus pericula. Mea at consulatu efficiantur. Vix nonumy iuvaret dolorum ei, id qui suas zril torquatos, quo ut error mandamus petentium. Corpora placerat nec ad, mel bonorum omittam disputationi no. Pro justo efficiendi an. Expetenda persequeris pri id, te offendit consulatu pro. Mel quas recusabo cu. Agam definitionem eu vis, ut eros oportere pri. Consul nominati ei vel.'
      },
      {
        id: 'gravel',
        title: 'test1',
        url: 'https://images.unsplash.com/flagged/photo-1554443883-83db889b4007?ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80',
        capture: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        text: 'Lorem ipsum dolor sit amet, vivendo deleniti ius at. Ut quod quas corrumpit sea, ex mutat accusam sed. Amet eligendi qui ad. Affert habemus legendos vim ei, cu purto graece veritus eam. Affert doctus eloquentiam te sed, ut vis nostro eirmod imperdiet, cu pri elit percipitur liberavisse. Tacimates abhorreant delicatissimi vis ei, eos ad graeci tibique delectus. At docendi democritum adolescens nam, ei feugiat comprehensam mei. Iusto sensibus qui et. Vis no nostro detraxit, vocent probatus ut pro. Sit no nonumy insolens. Ut movet fabellas nec, mea fugit everti at.'
      },
      {
        id: 'asphalt',
        title: 'test2',
        url: 'https://images.unsplash.com/photo-1554548686-7d93ffa2a53d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        capture: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum.',
        text: 'Lorem ipsum dolor sit amet, te facilis definiebas instructior has. Cu usu summo essent referrentur, ius nemore iuvaret eu. Cu homero causae scribentur vix, ut meis torquatos dissentiunt nam, pro te dicat civibus pericula. Mea at consulatu efficiantur. Vix nonumy iuvaret dolorum ei, id qui suas zril torquatos, quo ut error mandamus petentium. Corpora placerat nec ad, mel bonorum omittam disputationi no. Pro justo efficiendi an. Expetenda persequeris pri id, te offendit consulatu pro. Mel quas recusabo cu. Agam definitionem eu vis, ut eros oportere pri. Consul nominati ei vel.'
      }
    ]
  }

  render() {
    return (
      <section className={styles.articles}>
        <h2>Полезные статьи о камне</h2>
        {this.state.articles.map(item => {
          return <Article title={item.title} url={item.url} capture={item.capture} text={item.text} id={item.id} key={item.id} />
        })}
      </section>
    )
  }
}

export default Articles

