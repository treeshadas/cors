async function fetchData(params) {
    const response=await fetch("http://localhost:3500/datas",{
        method:"get"

    });
    const data=await response.json();
    console.log(data)

    
}