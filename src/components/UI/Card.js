import "./Card.css";
function Card(props) {
  const classes = "card " + props.className;

  //이걸로 배경에 쓸 박스를 만들고 계속 재활용 가능하다!!
  //props.children을 잘 이용하기!
  return <div className={classes}>{props.children}</div>;
}

export default Card;
