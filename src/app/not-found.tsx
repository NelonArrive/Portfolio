import Image from 'next/image'
import Link from 'next/link'

import style from './NotFound.module.scss'

export default function NotFound() {
	return (
		<div className={style.list}>
			<Image
				src='/notfound.svg'
				width={256}
				height={256}
				alt='notfound'
			/>
			<div className={style.info}>
				<h2>4️⃣0️⃣4️⃣ - Page not found</h2>
				<p>Perhaps you were mistaken... Check if you entered the address correctly? Or go to the main page</p>
				<Link href='/'>
					<button>Go to Home</button>
				</Link>
			</div>
		</div>
	)
}
