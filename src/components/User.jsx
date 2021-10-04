
const User = ({ user }) => {

    return (
        <div>
            <div className="card">
                <div className="container">
                    <div className="row gap-4 justify-content-center p-4">
                        <div className="col-12 col-md-3 text-center">
                            <img 
                                src= {user.avatar_url}
                                alt="avatar" 
                                width="130"
                                height="130"
                                className="rounded-circle image"
                            />
                        </div>

                        <div className="col-12 col-md-8">
                            <h1 className="h2 mb-3 text-center text-md-start">
                                {user.login}
                            </h1>
                            <div className="mb-3 text-center text-md-start">
                                {user.bio}
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    {user.followers} &nbsp;
                                    Followers
                                </div>
                                <div>
                                    {user.following} &nbsp;
                                    Following
                                </div>
                                <div>
                                    {user.public_repos} &nbsp;
                                    Repos
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
