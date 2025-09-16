const modalFunc = () => {
	const modal = document.querySelector('.cart-modal__overlay')
	const cartBtn = document.querySelector('#cart-button')

	const openModal = () => {
		modal.classList.add('open')
	}

	const closeModal = () => {
		modal.classList.remove('open')
	}

	cartBtn.addEventListener('click', () => {
		openModal()
	})

	modal.addEventListener('click', event => {
		if (
			event.target.classList.contains('cart-modal__overlay') ||
			event.target.closest('.cart-modal__header--close')
		) {
			closeModal()
		}
	})
}

const goodsFunc = () => {
	const container = document.querySelector('.products-wrapper')

	const loading = () => {
		container.innerHTML =
			'<p style="width: 100%; text-align: center;">Загрузка</p>'
	}

	const renderGoods = () => {
		container.innerHTML = ''

		const goods = [
			{
				id: 1,
				name: 'Ролл угорь стандарт',
				description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
				price: 250,
				image: 'good-1.jpg',
			},
			{
				id: 2,
				name: 'Калифорния лосось стандарт',
				description:
					'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
				price: 395,
				image: 'good-2.jpg',
			},
			{
				id: 3,
				name: 'Окинава стандарт',
				description:
					'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
				price: 250,
				image: 'good-3.jpg',
			},
			{
				id: 4,
				name: 'Цезарь маки хl',
				description:
					'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
				price: 250,
				image: 'good-4.jpg',
			},
			{
				id: 5,
				name: 'Ясай маки стандарт 185 г',
				description:
					'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
				price: 250,
				image: 'good-5.jpg',
			},
			{
				id: 6,
				name: 'Ролл с креветкой стандарт',
				description:
					'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
				price: 250,
				image: 'good-6.jpg',
			},
		]

		goods.forEach(good => {
			container.insertAdjacentHTML(
				'beforeend',
				`
                <div class="products-card">
                    <div class="products-card__image">
                        <img src="./images/goods/${good.image}" alt="${good.image}" />
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h5 class="products-card__description--name">
                                ${good.name}
                            </h5>
                        </div>
                        <div class="products-card__description-row">
                            <p class="products-card__description--text">
                                ${good.description}
                            </p>
                        </div>
                        <div class="products-card__description-row">
                            <div class="products-card__description-controls">
                                <button class="btn btn-primary">
                                    В корзину
                                    <img
                                        src="images/icons/shopping-cart-white.svg"
                                        alt="shopping-cart"
                                    />
                                </button>
                                <span class="products-card__description-controls--price"
                                    >${good.price} ₽</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                `
			)
		})
	}

	if (container) {
		loading()

		setTimeout(() => {
			renderGoods()
		}, 1000)
	}
}

modalFunc()
goodsFunc()
