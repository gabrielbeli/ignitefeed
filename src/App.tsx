import { Post, PostType }  from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabrielbeli.png',
      name: 'Gabriel Beli',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite Reactjs, formação da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link', content: '👉 gabrielbeli/IgniteFeed' },
    ],
    publishedAt: new Date('2024-03-15 19:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite Reactjs, formação da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link', content: '👉 gabrielbeli/IgniteFeed' },
    ],
    publishedAt: new Date('2024-03-17 07:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

