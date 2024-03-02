import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Index = () => {
  const { roomId } = useParams();
  const myMeetingRef = useRef();

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 1884605328;
      const serverSecret = "55665758b1079a2717d5de438c5437a9";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        `Enter your name here`
      );
      const zc = ZegoUIKitPrebuilt.create(kitToken);

      if (myMeetingRef.current) {
        zc.joinRoom({
          container: myMeetingRef.current,
          sharedLinks: [
            {
              name: "Copy link",
              url: `wi-chat-video.netlify.app`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
          showScreenSharingButton: true,
        });
      }

      return () => {
        zc.destroy();
      };
    };

    myMeeting();
  }, [roomId]);

  return (
    <div className="video-div">
      <div className="video-container" ref={myMeetingRef}></div>
    </div>
  );
};

export default Index;
