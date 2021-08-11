1. input창에 입력하고 가져온 데이터를 다시 map을 통해 출력하는 과정에서, 
데이터들의 순서가 뒤죽박죽이 되는 문제를 경험했다.
-> key를 index가 아닌, id로 주면 간단히 해결되는 문제였다. 


2. 한 함수내에서 두번의 setState를 사용할때,...
setState가 비동기적으로 작동하기 때문에  두번째 setState가 첫번째의 state에 depend한다면, 항상 최신이 아니게 되는 문제를 만났다. 
-> 함수 밖에서 const filtered와 같이 따로 변수 선언을 하여, 이용하면 최신의 것으로 유지할 수 있음을 알았지만,
-> 단, 만약 class component형식을 쓰게 된다면, 두번째 인자로 콜백함수를 가져 올 수 있어, 이 문제는 해결이 가능하다. 
-> 혹은, function component형식을 쓴다 해도, useEffect를 쓰면 해결은 가능하다
-> 하지만, 한 함수내에서 비동기 await과 같이 작동시키는 방법에 대해서는 아직 찾지 못했다. 
-> 서치를 하고, 여러곳에 물어본 결과, 그런방법 없다고 한다. 내가 위에 적은 방식으로 쓰자.
