import React from 'react'
import styles from './NotFounBlock.module.scss'

console.log(styles)
const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>___Ничего не найдено___ :(</h1>
    </div>
  )
}

export default NotFoundBlock
