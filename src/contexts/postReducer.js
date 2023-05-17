import { post1, story1, story2, story3, storyPost1 } from "../assets/image";
import {
  ADD_COMMENTS,
  HIDE_POST,
  MODEL_PHOTO_OR_VIDEO,
  POST,
} from "./Action-types";

export const INITIAL_STATE = {
  modelPhotoOrVideo: true,
  post: [
    {
      id: "1",
      name: "Sam Lanson",
      work: "Web Developer at Webestica",
      thoughts:
        "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
      img: post1,
      comments: [
        {
          name: "Frances Guerrero",
          img: story1,
          comments:
            "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.",
          reply: [
            {
              name: "Lori Stevens",
              img: story2,
              comments:
                "See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.",
            },
            {
              name: "Billy Vasquez",
              img: story3,
              comments: "Wishing calling is warrant settled was lucky.",
            },
          ],
        },
        {
          name: "Frances Guerrero",
          img: story1,
          comments:
            "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.",
        },
      ],
    },
  ],
};

export const PostReducer = (state, action) => {
  switch (action.type) {
    case MODEL_PHOTO_OR_VIDEO:
      return { ...state, modelPhotoOrVideo: action.payload };

    case POST:
      return { ...state, post: [action.payload, ...state.post] };

    case HIDE_POST:
      let removePost = state.post.filter(
        (value) => value.id !== action.payload
      );
      return { ...state, post: removePost };

    case ADD_COMMENTS:
      state.post[0].comments = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
