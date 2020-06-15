#Movie App 2019

React JS Fundamentals Course (2020)



## 리액트 Props와 State 란?
props 한줄 요약 : 부모 컴포넌트가 자식 컴포넌트에게 주는 값. 자식 컴포넌트는 Props를 수정할 수 없다.
** props의 설정은 propTypes를 통해 객체를 설정하거나, getDefaultProps를 통해 props 값을 받아올 수 있다.

state 한줄 요약 : 컴포넌트 내부에 존재하고 있고 상태값 변경이 가능한 값.

## 함수형 컴포넌트와 클래스기반 컴포넌트의 차이점

함수형 컴포넌트 : 순수 자바스크립트 함수를 이용하여 컴포넌트를 정의한 것
클래스기반 컴포넌트 : React.Component를 상속받은 클래스를 이용하여 컴포넌트를 정의한 것
- 클래스기반 컴포넌트는 props, state 값이 변경되면 항상 re-render 리렌더링 함

함수형 컴포넌트와 클래스기반 컴포넌트의 차이 : https://lktprogrammer.tistory.com/128

## 컴포넌트 Life Cycle

constructor : 생성자 메서드로서 컴포넌트가 처음 만들어질 때 실행된다.

componentWillMount : 컴포넌트가 DOM 위에 만들어지기 전에 실행된다.

render : 컴포넌트 렌더링을 담당합니다.

componentDidMount : 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후에 실행되는 메서드.

shouldComponentUpdate : prop 또는 state가 변경되었을 떄, 리렌더링을 할지 말지 정하는 메서드
실제 사용할 때는 props의 값을 비교하여 리렌더링 할지말지 결정하는 방식으로 사용.

componentDidUpdate : 컴포넌트가 리렌더링을 마친 후 실행됩니다.

componentWillUnmount : 컴포넌트가 DOM에서 사라진 후 실행되는 메소드입니다.









