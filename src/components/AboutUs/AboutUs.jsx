import React from 'react';
import s from'./AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={s.main}>
            <div className = {s.container}>
                <h1>ABOUT US</h1>
                <p>
                    Grace Church is a caring family-centered church that is founded on the Word of God, driven by prayer and has a vision to bring the saving grace of Jesus Christ to the city of Montreal. The city of Montreal is increasingly drifting away from God and marginalizing an absolute Creator at an alarming rate. There is opposition to the Gospel, but there also exists genuine questions regarding God, man, faith, religion, etc…
                </p>
                <p>
                    The vision for Grace Church is be a ‘pillar of Truth’ (1 Tim. 3:15) and to take a proactive approach to Matthew 28:19,20 The Great Commission, in becoming a beacon of light and hope to a dying world.
                </p>
                <p>
                    As the ‘Body of Christ’ (1 Cor.12:27), we intend to bring the Gospel of Christ where His name is not spoken, to proclaim where He is not heard, and to offer hope to the hearts that have none.
                </p>
                <a href="#">View Pictures</a>
            </div>
        </div>
    );
}

export default AboutUs;