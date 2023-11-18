import React from 'react';
import './Kennel.css'
function Kennel() {
    return(
        <main>
                <article className='informacaoContentArea'>
                    <div className='TituloPedArea'>
                        <h1>Vai até um kennel Clube</h1>
                    </div>
                    <div className='SubtituloPedArea'>
                        <h3>O que é um Kennel Clube?</h3>
                    </div>
                    <div className='textPedArea'>
                        <p>O Brasil Kennel Club é a entidade cinófila de maior tradição no território nacional. Fundado em 1922 e situado na Cidade do Rio de Janeiro, tem por finalidade congregar os cinófilos, cuidando dos interesses de todas as raças caninas.

Com mais de 100 anos de trabalho, amor e dedicação à cinofilia brasileira, o Brasil Kennel Club participa como membro da Confederação Brasileira de Cinofilia e da Federação Cinológica do Rio de Janeiro, promovendo o desenvolvimento cultural e desportivo, através de atividades que visem o aprimoramento das raças caninas.</p>
                    </div>
                    <div className='AcessarArea'>
                        <div className='informacaoPedArea'>
                            <h3>Para Mais Informações Acesse:</h3>
                        </div>
                        <div className='sitePedArea'>
                            <p><a href='https://www.cbkc.org/'>Confederação Brasileira de Cinifolia(CBKC)</a></p>
                        </div>
                    </div>
                </article>
        </main>
    )
}
export default Kennel;