import React from 'react';
import './DocPed.css';
function DocPed() {
    return(
        <main>
        <div className='content'>
                <article className='informacaoContentArea'>
                    <div className='TituloPedArea'>
                        <h1>Documentação Pedigree</h1>
                    </div>
                    <div className='SubtituloPedArea'>
                        <h3>O que é documentação Pedigree?</h3>
                    </div>
                    <div className='textPedArea'>
                        <p>O pedigree é o registro genealógico de um cão de raça pura.Ele é atribuído aos filhotes de dois cães, que já possuem pedigree, pelo canil filiado à CBKC onde nasceram. No documento, consta o nome do cão, sua raça, nome do criador, do canil, dos pais, data de nascimento e os dados de sua árvore genealógica até a terceira geração.</p>
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
        </div>
        </main>
    )
}
export default DocPed;