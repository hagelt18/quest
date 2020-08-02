
import Talk from "talkjs";

export const getHelpee = () => new Talk.User({
  id: "123456",
  name: "Hero",
  email: "hero@test.com",
  photoUrl: "https://i.imgur.com/w1UJlGp.png",
  welcomeMessage: "Help will come to those who ask for it."
});

export const getHelper = () => new Talk.User({
  id: "654321",
  name: "Old Woman",
  email: "wisewoman@test.com",
  photoUrl: "https://i.imgur.com/urprSoj.png",
  welcomeMessage: "Welcome!"
});

export const getInbox = (me, other) => {
  if (!window.talkSession) {
    window.talkSession = new Talk.Session({
      appId: 'tKuSoSds',
      me: me
    });
  }

  // You control the ID of a conversation. oneOnOneId is a helper method that generates
  // a unique conversation ID for a given pair of users. 
  const conversationId = Talk.oneOnOneId(me, other);

  const conversation = window.talkSession.getOrCreateConversation(conversationId);
  conversation.setParticipant(me);
  conversation.setParticipant(other);

  return window.talkSession.createInbox({
    selected: conversation
  });
}
