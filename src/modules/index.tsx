import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DiscoveryModule } from "./discovery";
import { TopModule } from "./top";
import { PlayModule } from "./play";
import { MovieModule } from "./movie";
import { DownloadModule } from "./download";
import { FavoriteModule } from "./favorite";
import { ChannelModule } from "./channel";
import { MusicianModule } from "./musician";
import { CloudModule } from "./cloud";
import { SettingModule } from "./setting";
import { SearchModule } from "./search";
import { Footer } from "./core/footer.container";
import { Initial } from "./core/initial.container";
import { Event } from "./core/event.container";
import { ContextMenu } from "./core/context-menu.container";
import { Playing } from "./core/playing.container";

export class Routes extends React.Component {
    render() {
        return <div>
            <Route exact={true} path="/" component={() => <Redirect to="/discoveries"/>}/>
            <Route path="/discoveries" component={DiscoveryModule}/>
            <Route path="/tops" component={TopModule}/>
            <Route path="/plays" component={PlayModule}/>
            <Route path="/movies" component={MovieModule}/>
            <Route path="/downloads" component={DownloadModule}/>
            <Route path="/favorite" component={FavoriteModule}/>
            <Route path="/channels" component={ChannelModule}/>
            <Route path="/musicians" component={MusicianModule}/>
            <Route path="/clouds" component={CloudModule}/>
            <Route path="/settings" component={SettingModule}/>
            <Route path="/search" component={SearchModule}/>
            <Footer/>
            <Initial/>
            <Event/>
            <ContextMenu/>
            <Playing/>
        </div>;
    }
}
