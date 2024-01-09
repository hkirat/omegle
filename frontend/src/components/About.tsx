import React from "react";

function About() {
  return (
    <div>
      <h2>Overview</h2>
      <p>This application is designed to facilitate seamless video communication between users. Whether for personal or business use, this app provides a reliable and user-friendly platform for video calls.</p>
      <h2>Features</h2>
      <ul>
        <li>
            <h3>User Authentication</h3>
            <p>
                <ul>
                    <li>Users can create accounts and log in securely to access the video calling features.</li>
                    <li>Optional integration with third-party authentication providers for a streamlined login experience.</li>
                </ul>
            </p>
        </li>
        <li>
            <h3>Video Calls</h3>
            <p>
                <ul>
                    <li>High-quality video calls with low latency for a smooth communication experience.</li>
                    <li>Support for both one-on-one and group video calls.</li>
                    <li>Real-time video and audio transmission using WebRTC technology.</li>
                </ul>
            </p>
        </li>
        <li>
            <h3>User Presence</h3>
            <p>
                <ul>
                    <li>Indication of user presence (online, offline, away) for a better understanding of user availability.</li>
                </ul>
            </p>
        </li>
      </ul>
    </div>
  );
}

export default About;
