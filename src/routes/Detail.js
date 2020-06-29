import React from "react";
import axios from "axios";

class Detail extends React.Component{

    // 내가 하고 싶은 것은 MovieDetail 데이터를 받아서 화면에 뿌려주고 싶다

    getMovieDetail = async() => {

        const { 
            data 
        } = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);

        console.log("this is data part");
        console.log(data);
    }

    componentDidMount(){

        const { 
            location, 
            history,
            id } 
            = this.props;

            console.log(this.props);
        if(location.state == undefined){
            history.push("/");
        }

        this.getMovieDetail(id);

    }

    render(){
        const { location } = this.props;
        
        if(location.state){
            return (
                <div className="detail">
                    <h1>영화제목이 나올 부분입니다</h1>

                </div>
            );
            

        }else{
            return (
                <div>
                    <h1>영화 불러오는 중</h1>
                </div>
            );
        }
    }

}

export default Detail;