import React from 'react';
import TopBar from './TopBar';
import InfoBox from './InfoBox';

function App() {
    const data = {
        Domain: "datazag.com",
        //... (the rest of your data)
    };
    const domainInfo = {
        Domain: data.Domain,
        A: data.A,
        NS: data.NS,
        CNAME: data.CNAME,
        'Create Date': data['Create Date']
    };
    const emailInfo = {
        MX: data.MX,
        SPF: data.SPF,
        Mail: data.Mail
    };
    // similarly, you can extract other sections...

    return (
        <div>
            <TopBar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <InfoBox title="Domain Info" data={domainInfo} />
                <InfoBox title="Email Info" data={emailInfo} />
                {/* other sections */}
            </div>
        </div>
    );
}
export default App;

