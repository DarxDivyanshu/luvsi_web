import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "d75d039d0f9d4a3d8665dbbfaa530677";
const token =
  "007eJxTYKha2Ch4+Ktg4l3/ZSesHtVbSOzJ+XruYEn1vz5tpY96etEKDCnmpikGxpYpBmmWKSaJxikWZmamKUlJaYmJpsYGZubm7Tw/UhoCGRl8GBcxMTJAIIjPwpCbmJnHwAAAl+0f4g==";

export const config = { mode: "rtc", codec: "vp9", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";

