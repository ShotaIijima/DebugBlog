import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/book.jpg')`,
          }}
        >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: 'rgb(0, 160, 233)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            Latest Stories
          </h1>
          <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(0, 160, 233) 0.5rem 0px 0px, rgb(0, 160, 233) -0.5rem 0px 0px',
            backgroundColor: 'rgb(0, 160, 233)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
          >
            直近の投稿を表示します
          </h3>
        </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
