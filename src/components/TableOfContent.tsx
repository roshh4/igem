import { useEffect, useState } from 'react';

interface TocItem {
    title: string,
    id: string
}

interface TableOfContentProps {
    pageRef: React.RefObject<HTMLDivElement>;
}

const TableOfContent: React.FC<TableOfContentProps> = ({ pageRef }) => {
    const [tocContent, setTocContent] = useState<TocItem[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0.5) {
                    document.querySelectorAll('.toc-item').forEach(item => item.classList.remove('active'));
                    document.querySelector(`.toc-item[href="#${id}"]`)?.classList.add('active');
                }
            });
        }, {
            threshold: [0.5] // 50% of the element is visible
        });

        document.querySelectorAll('h2[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => {
            document.querySelectorAll('h2[id]').forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        if (!pageRef.current) return;
        const ele = pageRef.current.querySelectorAll('h2');
        console.log(ele);

        const newTocContent: TocItem[] = [];
        ele.forEach(ele => console.log(ele.id));
        ele.forEach(ele => newTocContent.push({
            title: ele.innerText,
            id: ele.id
        }));
        setTocContent(newTocContent);
        console.log(newTocContent);
    }, [pageRef]);

    return (
        <div className="toc-container">
            <div className='toc-head'>
                <span>Table Of Contents</span>
            </div>
            <div className="toc-menu">
                {
                    tocContent.map((tocItem, key) => (
                        <a href={`#${tocItem.id}`} key={key} className="toc-item">{tocItem.title}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default TableOfContent;
