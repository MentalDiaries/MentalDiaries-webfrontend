import React from 'react'
import { useParams } from 'react-router-dom'

const SingleDiary = () => {
  const {diaryId} = useParams();
  return (
    <div className = "todays_diary">
      {diaryId}
    </div>
  )
}

export default SingleDiary