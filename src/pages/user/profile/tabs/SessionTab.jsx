import { useGetSessionQuery } from "@/redux/api/sessionApi";
import { useGetUserProfileQuery } from "@/redux/api/userProfileApi";

export const SessionTab = () => {
    const { data: userProfileData } = useGetUserProfileQuery();
    const { data: userSessions } = useGetSessionQuery();
    return (
        <div>
            <h1 className="font-bold text-2xl mb-1">Session log</h1>
            <p className="text-gray-500">Disini terdapat log kapan anda login dan logout dan melalui jalur apa.</p>
            <p className="py-5">
                User :  {
                    userProfileData.profile.name
                }
            </p>
            {userSessions && userSessions.data.length > 0 ? (
                <table className="table-auto w-full p-5 rounded-lg border-gray-300">
                    <thead>
                        <tr className="bg-gray-300">
                            <th>Session ID</th>
                            <th>Login Source</th>
                            <th>Duration</th>
                            <th>Is Logged Out?</th>
                            <th>Logged In At</th>
                            <th>Logged Out At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userSessions.data.map(session => (
                            <tr key={session.id}>
                                <td className="p-3 border text-center">{session.id}</td>
                                <td className="p-3 border text-center">{session.source}</td>
                                <td className="p-3 border text-center">{(session.duration / 60).toFixed(0)} Min</td>
                                <td className="p-3 border text-center">{session.isLoggedOut}</td>
                                <td className="p-3 border text-center"> {new Intl.DateTimeFormat('en-GB', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: 'numeric',
                                    hour12: false,
                                    minute: 'numeric',
                                    timeZone: 'Asia/Jakarta',
                                }).format(new Date(session.loggedInAt))}
                                </td>
                                <td className="p-3 border text-center">
                                    {session.loggedOutAt && session.loggedOutAt !== "1970-01-01T00:00:00.000Z" ? (
                                        new Intl.DateTimeFormat('en-GB', {
                                            weekday: 'long',
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                            hour: 'numeric',
                                            hour12: false,
                                            minute: 'numeric',
                                            timeZone: 'Asia/Jakarta',
                                        }).format(new Date(session.loggedOutAt))
                                    ) : (
                                        <p>Not logged out yet</p>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">Tidak ada data</p>
            )}

        </div>
    )
}
