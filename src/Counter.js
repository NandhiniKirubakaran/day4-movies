import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

// export function Counter1() {
//   // camelCase
//   let [like, setLike] = useState(0);
//   let [disLike, setDisLike] = useState(0);

//    // // contional styling
//   // const likeStyles = {
//   //   color: like >= 10 ? "green" : "deepskyblue",
//   //   fontSize: "18px",
//   // };
//   // const disLikeStyles = {
//   //   color: disLike >= 10 ? "red" : "deepskyblue",
//   //   fontSize: "18px",
//   // };

//   return (
//     // <div>

//     {/* conditional rendering */}
//     // {like - disLike > 10 ? <h3>You are awesome😍😊</h3> : null}

//     //   <button  onClick={() => setLike(like + 1)}> 👍 {like} </button>
//     //   <button  onClick={() => setDisLike(disLike + 1)}> 👎 {disLike} </button>
//     // </div>

//       {/* <button style={likeStyles} onClick={() => setLike(like + 1)}
//       > 👍 {like} </button>
//       <button style={disLikeStyles} onClick={() => setDisLike(disLike + 1)}
//       > 👎 {disLike} </button> */}

//   );
// }

export function Counter() {
  // camelCase
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);

const incrementLike = () => setLike(like + 1);
const incrementDisLike = () => setDisLike(disLike + 1);

  return (
    <div>


    
      <IconButton onClick={incrementLike} color="primary" aria-label="like">
      <Badge badgeContent={like} color="primary">👍</Badge>
      </IconButton>

      <IconButton onClick={incrementDisLike} color="primary" aria-label="disLike">
      <Badge badgeContent={disLike} color="error">👎</Badge>
      </IconButton>

    </div>
  );
}