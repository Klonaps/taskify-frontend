interface UserAvatarProps {
  login: string
}

export const UserAvatar = ({ login }: UserAvatarProps) => {
  const firstLetter = login.charAt(0).toUpperCase()
  const bgColorTop = `hsl(${firstLetter.charCodeAt(0) % 360}, 70%, 50%)`
  const bgColorBottom = `hsl(${firstLetter.charCodeAt(0) % 360}, 70%, 40%)`
  const textColor = `hsl(${firstLetter.charCodeAt(0) % 360}, 70%, 100%)`
  const linearGradient = `linear-gradient(to bottom, ${bgColorTop}, ${bgColorBottom})`

  return (
    <div
      className={`w-9 h-9 rounded-full overflow-hidden flex items-center justify-center cursor-pointer`}
      style={{
        backgroundColor: bgColorTop,
        background: linearGradient,
      }}
    >
      <p
        className="select-none"
        style={{
          color: textColor,
        }}
      >
        {firstLetter}
      </p>
    </div>
  );
}
