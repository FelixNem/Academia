import React from 'react'

export const Navbar = () => {
    const img = 'https://png.pngtree.com/png-clipart/20230801/original/pngtree-ancient-opened-book-knowledge-ancient-empty-vector-picture-image_9215430.png'

  return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={img} alt="Bootstrap" width="30" height="24" />
                </a>
            </div>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
                </div>
            </div>

			<div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
				<ul className='navbar-nav ml-auto'>
					<span className='nav-item nav-link text-primary'>{user?.name}</span>
					<button className='nav-item nav-link btn' onClick={onLogout}>
						Log Out
					</button>
				</ul>
			</div>
		</nav>
  )
}
