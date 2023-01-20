import React, { useEffect, useState } from "react";
import { getTeamMembers } from "../../../Services/API";
// import Button from "../../Button/Button";
import { TeamMembersList, TeamMembersSection } from "./Team.styled";
import TeamMembersCard from "./TeamMembersCard";


const Team = () => {
    const [members, setMembers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTeamMembers(page).then(data => {
            const members = data.users;
            const sortedMembers = members.sort(((a, b) => b.registration_timestamp - a.registration_timestamp))

            setMembers(prevState =>  {
                return page === 1 ? sortedMembers : [...prevState, ...sortedMembers]
            })
        })
    }, [page]);

    const showMore = () => {
        setPage(prevState => {
            return prevState +1 
        })
    } 
    // console.log(members)

    return ( 
        <TeamMembersSection>
            <h2>Working with GET request</h2>   
            
                <TeamMembersList>
                    {members.map((member) => (
                        <TeamMembersCard key={member.id} member={member}/>
                    ))}
                </TeamMembersList>
            
            {/* <Button text="Show more" type="submit" onClick={showMore}> </Button> */}
            <button type="submit" onClick={showMore} > sdghfjgkhlj;</button>
        </TeamMembersSection>
    )
};

export default Team;