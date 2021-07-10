import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <div
        className="basic-icn"
        style={{
          backgroundImage: `url('/img/notfound.png')`,
          backgroundPosition: `top left`,
          backgroundAttachment: `scroll`,
        }}
      />
      <h1>お探しのページは見つかりませんでした。</h1>
      <p>もう一度URLを確認してください。</p>
      <br />
      <br />
    </div>
  </Layout>
)

export default NotFoundPage
