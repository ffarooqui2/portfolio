export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-12">
      <p>FAAIZUDDIN FAROOQUI</p>
      <ul className="flex space-x-8">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
