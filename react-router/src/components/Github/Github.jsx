import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/shruti248')
            .then((res) => res.json()).then((data) => {
                console.log(data);
                setData(data);
            })
    }, [])

    return (
        <>
            <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
                Github Followers : {data.followers}
                <img src={data.avatar_url} alt="Git ProfilePic" width={300} />
            </div>
            <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
                Github Location : {data.location}

            </div>
        </>
    )
}

export default Github
