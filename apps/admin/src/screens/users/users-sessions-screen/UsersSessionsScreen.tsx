import { useParams } from "@solidjs/router";
import { UsersLayout } from "../UsersLayout";
import { SiteTitle } from "../../../components/site-title/SiteTitle";

export function UsersSessionsScreen() {
  const { username } = useParams();
  return (
    <UsersLayout username={username}>
      <SiteTitle>Session</SiteTitle>
      <h1>Sessions</h1>
      <p>bans</p>
    </UsersLayout>
  );
}

export default UsersSessionsScreen;
