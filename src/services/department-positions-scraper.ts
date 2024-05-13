import axios from 'axios';
import { load } from 'cheerio';

export class DepartmentPositionsScraper {
    async getOpenPositions(department: string): Promise<string[]> {
        try {
            const actianResponse = await axios.get('https://www.actian.com/company/careers');
            const $ = load(actianResponse.data);

            const openPositionsSection = $('.module.open-positions.faq');
            if (!openPositionsSection.length) {
                throw new Error('Open positions section not found!');
            }
     
            const departmentSection = openPositionsSection.find('.category-name').filter(function() {
                return $(this).text()?.trim().toLowerCase() === department.toLowerCase();
            }).closest('.accordion-item').find('.listing');
            if (!departmentSection.length) {
                throw new Error('Department not found!');
            }

            const positions: string[] = [];
            departmentSection.find('.job-name').each((_, element) => {
                const title = $(element).text()?.trim();
                positions.push(title);
            });
            return positions;
        } catch (err) {
            throw err;
        }
    }
}