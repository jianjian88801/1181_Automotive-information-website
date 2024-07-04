const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootjtw43/",
            name: "springbootjtw43",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootjtw43/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "汽车资讯网站"
        } 
    }
}
export default base
