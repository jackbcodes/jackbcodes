type SocialIconProps = {
  icon: React.ReactNode
  href: string
}

const SocialIcon = ({ icon, href }: SocialIconProps) => {
  return (
    <a href={href} className='flex items-center' target='_blank'>
      <span className='transition self-center text-xl dark:text-gray-200 lg:dark:text-gray-400 hover:dark:text-gray-200'>
        {icon}
      </span>
    </a>
  )
}

export default SocialIcon
