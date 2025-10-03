interface ITeamMemberProps {
  name: string;
  position: string;
}

const TeamMember = ({ name, position }: ITeamMemberProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 text-center">
      <img
        src="/team1.jpg"
        alt="Team member"
        className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{position}</p>
    </div>
  );
};

export default TeamMember;
