import { gql } from '@apollo/client'

export const CREATE_USERS_LESSON = gql`
  mutation CreateUsersLesson($input: createUsersLessonInput!) {
    createUsersLesson(input: $input) {
      usersLesson {
        userId {
          id
        }
        lesson_id
      }
    }
  }
`

export const DELETE_USERS_LESSON = gql`
  mutation DeleteUsersLesson($input: deleteUsersLessonInput!) {
    deleteUsersLesson(input: $input) {
      usersLesson {
        userId
        lesson_id
      }
    }
  }
`

export const CREATE_PROGRESSION_LESSON = gql`
  mutation CreteProgressionLesson($input: ComponentCourseVideoInput!) {
    users_permissions_users {
      id
    }
  }
`
