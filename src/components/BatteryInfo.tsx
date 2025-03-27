import React from "react";
import {
  Battery,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Zap,
  PiggyBank,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import battery from "../image/battery.jpeg";
export function BatteryInfo() {
  const { t } = useLanguage();

  return (
    <section
      id="battery"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
    >
      {/* Декоративный фоновый элемент */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.15),transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Проблемы */}
        <div className="relative">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-yellow-500/20 p-4 rounded-2xl mb-6 backdrop-blur-sm">
              <AlertTriangle className="w-10 h-10 text-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("batteryInfo", "title")}
            </h2>
            <p className="text-gray-400 max-w-2xl">
              {t("batteryInfo", "subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden h-[250px] sm:h-[400px] lg:h-[500px]">
                <img
                  src={battery}
                  alt="baner"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="items-center gap-3 mb-3 bg-yellow-500/20 px-4 py-2 rounded-lg backdrop-blur-sm inline-flex border border-yellow-500/30">
                    <Battery className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                    <span className="text-yellow-500 font-semibold">
                      {t("batteryInfo", "batteryType")}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm mt-4 bg-black/60 p-3 sm:p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    {t("batteryInfo", "batteryDescription")}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                  {t("batteryInfo", "mainProblemTitle")}
                </h3>
                <p className="text-gray-300">
                  {t("batteryInfo", "mainProblemText")}
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-lg font-semibold">
                    {t("batteryInfo", "importantTitle")}
                  </h3>
                </div>
                <p className="text-yellow-500/90">
                  {t("batteryInfo", "importantText")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Решение */}
        <div className="mt-12 sm:mt-20 relative">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-yellow-500/20 p-4 rounded-2xl mb-6 backdrop-blur-sm">
              <Wrench className="w-10 h-10 text-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("batteryInfo", "solution.title")}
            </h2>
            <p className="text-gray-400 max-w-2xl">
              {t("batteryInfo", "solution.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <div className="relative rounded-2xl overflow-hidden group h-[300px] sm:h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=800&h=800"
                    alt="Diagnostic Equipment"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-base sm:text-lg font-semibold mb-2">
                      {t("batteryInfo", "solution.equipment.title")}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {t("batteryInfo", "solution.equipment.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {Object.values(t("batteryInfo", "solution.features") || []).map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    className="group hover:bg-white/5 p-4 sm:p-6 rounded-xl transition-all duration-300 border border-white/5 hover:border-yellow-500/20"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <div className="text-yellow-500">
                          {index === 0 ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : index === 1 ? (
                            <Wrench className="w-6 h-6" />
                          ) : (
                            <PiggyBank className="w-6 h-6" />
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-yellow-500 transition-colors">
                          {item.title as string}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {item.description as string}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
