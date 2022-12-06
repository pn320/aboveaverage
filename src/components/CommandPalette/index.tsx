import { Combobox, Dialog, Transition } from "@headlessui/react";
import {
  ArrowUpRightIcon,
  BackwardIcon,
  ExclamationCircleIcon,
  ForwardIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useKeyPressEvent } from "react-use";

const pages = [
  {
    id: 1,
    name: "Home",
    category: "Pages",
    url: "/",
  },
  {
    id: 2,
    name: "Blog Posts",
    category: "Pages",
    url: "/blog",
  },
];

const commands = [
  { id: 1, name: "Next Track", icon: ForwardIcon, shortcut: "", url: "#" },
  { id: 2, name: "Previous Track", icon: BackwardIcon, shortcut: "", url: "#" },
  {
    id: 3,
    name: "Increase Volume",
    icon: SpeakerWaveIcon,
    shortcut: "",
    url: "#",
  },
  {
    id: 4,
    name: "Decrease Volume",
    icon: SpeakerWaveIcon,
    shortcut: "",
    url: "#",
  },
  {
    id: 5,
    name: "Mute Track",
    icon: SpeakerXMarkIcon,
    shortcut: "M",
    url: "#",
  },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [rawQuery, setRawQuery] = useState("");

  const query = rawQuery.toLowerCase().replace(/^[#>]/, "");

  const filteredPages =
    rawQuery === "#"
      ? pages
      : query === "" || rawQuery.startsWith(">")
      ? []
      : pages.filter((project) => project.name.toLowerCase().includes(query));

  const filteredActions =
    rawQuery === ">"
      ? commands
      : query === "" || rawQuery.startsWith("#")
      ? []
      : commands.filter((user) => user.name.toLowerCase().includes(query));

  useKeyPressEvent((e) => {
    if (e.metaKey || e.ctrlKey) {
      if (e.key == "k") {
        e.stopPropagation();
        e.preventDefault();
        open ? setOpen(false) : setOpen(true);
      }
    }
    return true;
  });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setRawQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Combobox onChange={(item: any) => (window.location = item.url)}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Start typing to search"
                    autoComplete="off"
                    onChange={(event) => setRawQuery(event.target.value)}
                  />
                </div>

                {(filteredPages.length > 0 || filteredActions.length > 0) && (
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-2 pb-[0px]"
                  >
                    {filteredPages.length > 0 && (
                      <li className="p-2 pb-2">
                        <h2 className="text-xs font-semibold text-gray-900">
                          Pages
                        </h2>
                        <ul className="-mx-2 mt-2 text-sm text-gray-700">
                          {filteredPages.map((project) => (
                            <Combobox.Option
                              key={project.id}
                              value={project}
                              className={({ active }) =>
                                classNames(
                                  "flex cursor-default select-none items-center rounded-lg px-3 py-2",
                                  active &&
                                    "bg-gray-900 bg-opacity-5 text-gray-900"
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <ArrowUpRightIcon
                                    className={classNames(
                                      "h-6 w-6 flex-none",
                                      active ? "text-black" : "text-gray-400"
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 flex-auto truncate">
                                    {project.name}
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                    {filteredActions.length > 0 && (
                      <li className="p-2">
                        <h2 className="text-xs font-semibold text-gray-900">
                          Commands
                        </h2>
                        <ul className="-mx-2 mt-2 text-sm text-gray-700">
                          {filteredActions.map((action) => (
                            <Combobox.Option
                              key={action.id}
                              value={action}
                              className={({ active }) =>
                                classNames(
                                  "flex cursor-default select-none items-center rounded-lg px-4 py-2",
                                  active &&
                                    "bg-gray-900 bg-opacity-5 text-gray-900"
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <action.icon
                                    className={classNames(
                                      "h-6 w-6 flex-none text-gray-900 text-opacity-40",
                                      active && "text-opacity-100"
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 flex-auto truncate">
                                    {action.name}
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {rawQuery === "?" && (
                  <div className="py-8 px-6 text-center text-sm sm:px-14">
                    <InformationCircleIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
                      Help with searching
                    </p>
                    <p className="mt-2 text-gray-500">
                      Use this to get around quickly around the page. You can
                      look up commands, blog posts, and specific pages on the
                      website. To look for blog posts just type the post name or
                      &gt; and continue typing to filter from all of them!
                    </p>
                  </div>
                )}

                {query !== "" &&
                  rawQuery !== "?" &&
                  filteredPages.length === 0 &&
                  filteredActions.length === 0 && (
                    <div className="py-8 px-6 text-center text-sm sm:px-14">
                      <ExclamationCircleIcon
                        className="mx-auto h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                      <p className="mt-4 font-semibold text-gray-900">
                        No results found
                      </p>
                      <p className="mt-2 text-gray-500">
                        There&apos;s nothing like that here, are you sure
                        you&apos;re looking for the right thing?
                      </p>
                    </div>
                  )}

                <div className="flex flex-wrap items-center py-2.5 px-4 text-xs text-gray-700">
                  Type{" "}
                  <kbd
                    className={classNames(
                      "mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white sm:mx-2",
                      rawQuery.startsWith("#")
                        ? "border-pink-700 font-extrabold text-pink-700"
                        : "border-gray-400 text-gray-900"
                    )}
                  >
                    #
                  </kbd>{" "}
                  <span className="sm:hidden">for pages,</span>
                  <span className="hidden sm:inline">to access pages,</span>
                  <kbd
                    className={classNames(
                      "mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white sm:mx-2",
                      rawQuery.startsWith(">")
                        ? "border-pink-700 font-extrabold text-pink-700"
                        : "border-gray-400 text-gray-900"
                    )}
                  >
                    &gt;
                  </kbd>{" "}
                  for commands, and{" "}
                  <kbd
                    className={classNames(
                      "mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white sm:mx-2",
                      rawQuery === "?"
                        ? "border-pink-700 font-extrabold text-pink-700"
                        : "border-gray-400 text-gray-900"
                    )}
                  >
                    ?
                  </kbd>{" "}
                  for help.
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
