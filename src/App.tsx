import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { AppWrapper } from './styles'
import MapView from './views/Map'
import PostView from './views/Post'
import ListView from './views/Admin/Posts/View'
// import AddPost from './views/Admin/Post/AddPost'
// import EditPost from './views/Admin/Post/EditPost'
import Preview from './views/Admin/Posts/Preview'
import Login from './views/Admin/Login'
const App = () => (
    <AppWrapper>
        <Router>
            <Switch>
                <Route path="/" exact component={MapView} />
                <Route path="/posts/:slug" exact component={PostView} />
                <Route path="/admin/login" exact component={Login} />
                <Route path="/admin/posts" exact component={ListView} />
                {/* <Route path="/admin/posts/add" exact component={AddPost} />
                <Route path="/admin/posts/edit/:id" exact component={EditPost} />*/}
                <Route path="/admin/posts/preview/:slug" exact component={Preview} />
                <Route>
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </Router>
    </AppWrapper>
)

export default App