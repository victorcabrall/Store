import styled from 'styled-components'


export const FooterArea = styled.footer`
    width: 100%;
    background-color:#FF8C00;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 64px 0px;

`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;

`

export const Row = styled.div`
    display: flex;
    
`
export const Title = styled.p`
    color:#fff;
    margin-bottom: 12px;
    
`
export const Subtitle = styled.p`
    font-size: 14px;
    line-height: 1.25em;
    color: 	#fff;
    
    
`
export const List = styled.ul`
    display:flex;
    list-style-type: none;
    gap: 8px;
    flex-direction: column;
`
export const Element = styled.li`
    font-size: 12px;
    color: 	#fff;
    & a {
        text-decoration: none;
        color: #E7E7E7;
    }

    
`

